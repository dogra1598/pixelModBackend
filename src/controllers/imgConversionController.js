import ApiResponse from "../utils/apiResponse.js";

export const upload = (req, res, next) => {
  res.status(200).json(new ApiResponse(200, "working"));
};

export const download = (req, res, next) => {};
