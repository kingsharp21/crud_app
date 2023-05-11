import { toast } from "react-toastify";

export const notifyError = (msg) => toast.error(msg);
export const notifySuccess = (msg) => toast.success(msg);
export const notifyWarning = (msg) => toast.warning(msg);

