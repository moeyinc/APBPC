export default {
  // VIDEO_SERVER_HOST: 'http://apbpc-server.local:2900',
  VIDEO_SERVER_HOST: 'http://localhost:2900',
  UPLOAD_API_PATH: "/api/upload-video",
  DOWNLOAD_API_PATH: "/api/download-videos",
  TOPC_API_PATH: '/api/get-topics',
  VIDEO: {
    CAPTURE_SIZE: {
      width: 1920,
      height: 1080
    },
    CROPPING_SIZE: {
      width: 200,
      side: 'left'
    },
    PREVIEW_SIZE: {
      width: 912,
      height: 513
    },
  },
  RECORDING_MAX_LENGTH: 1000 * 60 * 3  // 1000 * 60 * 3
}
