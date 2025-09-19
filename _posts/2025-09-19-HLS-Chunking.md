---
layout: post
title: How to implement HLS chunking in Vercel
image: <img width="512" height="512" alt="image" src="https://github.com/user-attachments/assets/a9138816-9612-4301-acd2-c262093e98df" />

categories: [Cloud, Media]
author: Absterrg0
comments: true
---

## What exactly is HLS chunking?

HLS chunking is a way to fetch a video stored in a CDN in a chunked format so that the complete video file does not get fetched at once. The main purpose of this is to reduce the waiting/loading time for the end-user. Various tools like `AWS Mediaconvert` are used to convert any `.mp4` files into respective HLS transcoded files. Libraries like `FFMPEG` can also be used to convert a file into its respective HLS chunks.

An HLS file consists of 2 file types:

- **`.m3u8` file**: This file is the primary manifest for the complete transcoded video. It contains the links and connections between all the `.ts` files, which are the chunked video segments that the `.mp4` file is converted into.
- **`.ts` file**: This file is a segment of the video in the chunked format which will eventually be fetched over the network and played on a media player on a website.

There is a big benefit to using chunking as it reduces wait and load times for the user and improves the UX. This also benefits costs, as the entire bandwidth of the video file is not used. Instead, only chunks are being fetched, hence less bandwidth is consumed.

---

## Vercel's architecture

Vercel uses a serverless architecture which can be helpful in some cases, but it also comes with limitations on how a particular process or software can be used. One of the most important libraries in media conversion, `FFMPEG`, is not supported by Vercel at all, hence no transcoding is possible in the cloud environment. To battle this, one could use `FFMPEG-static`, but the functionality of that library is also limited. Not to mention that Vercel has server timeouts for API calls that exceed their time limits, so the entire transcoding process would need to be done on the frontend, resulting in longer uploading times and bad UX.

The reason this problem was so interesting is because of Vercel. I had to change my approach several times due to its limitations. I even tried running a microservice on Render just for transcoding, but the time was still a bit too much. Also, the server function timeouts were a nuisance.

---

## MediaConvert

`MediaConvert` is a service provided by AWS which helps in transcoding a particular media file into another format. It can process an `.mp4` and convert it into the appropriate HLS format. Since the application was already using an AWS S3 bucket to store videos, the best option was to integrate `MediaConvert`. This allows the video to be transcoded internally so that the files are processed without the user having to wait for a long time.

The user would only be required to wait until the video is uploaded to S3 as an `.mp4` file. After that, an API call triggers a `MediaConvert` job to convert the specific video to the HLS format and store it in the same S3 bucket. This ensures that the HLS files are appropriately stored and can be fetched in chunks whenever a user requests them.

---

## Workflow (Solution)

The final solution that was implemented, keeping Vercel's limitations and the unavailability of `FFMPEG` in mind, was:

1. The user uploads the video via an upload component to an S3 bucket using a presigned URL on the frontend to avoid Vercel's server timeouts.
2. The URL for the video is constructed with the appropriate parameters and stored in our MongoDB model. This URL will be used to fetch the `.m3u8` file, which eventually fetches the video in chunks.
3. After the file upload is complete, another API call is made to the backend with the ID of the uploaded video, which triggers a `MediaConvert` process on the `.mp4` file.
4. The required `.mp4` file is converted into the appropriate HLS format and stored in a separate folder in the S3 bucket.
5. This makes the video available after a few minutes or hours, depending on the length and size of the video, as it will still be in the transcoding process by `MediaConvert`.
6. Once transcoding is completed, whenever a user opens a video, a request fetches the `.m3u8` file. This file links all the chunked `.ts` files and fetches them appropriately, ensuring that only the required chunks are downloaded and no extra bandwidth is used.

This was the solution that was implemented in the end. While there are a few downsides, such as the cost factor (as `MediaConvert` is not free and uses a pay-as-you-go model), it was the optimal solution given the cloud limitations.

---

## Alternative

An alternative to this approach is to set up a dedicated transcoding and uploading service on another cloud provider like Render. The two servers could then communicate to propagate the required information to construct the URL and store it in the MongoDB model. This could increase the user's upload time slightly but would reduce the cost factor. It would also improve S3 storage management, as the HLS formatted videos would be stored directly without needing the original `.mp4` file, which could be discarded once transcoding is done successfully using the `FFMPEG` library.

One of the annoying results of the implemented solution is having to manually clean out the original `.mp4` videos weekly, as they are no longer used. That problem could also be solved with this alternative.

@[Absterrg0](https://github.com/Absterrg0)

---

## Conclusion

Implementing HLS chunking for this application was definitely an interesting challenge, primarily due to the limitations of Vercel. The number of iterations that happened during the development process to come up with the optimal solution was tiring, but the brainstorming aspect of it was really fun. Thanks for reading this far.
