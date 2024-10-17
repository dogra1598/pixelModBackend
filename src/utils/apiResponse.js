class ApiResponse {
  constructor(statusCode, message = "success", data) {
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
