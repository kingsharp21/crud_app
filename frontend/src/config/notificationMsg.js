// notification msg config
import { toast } from "react-toastify";

export const notifyError = (msg) => toast.error(msg);   // to display error msg
export const notifySuccess = (msg) => toast.success(msg); // to display success msg
export const notifyWarning = (msg) => toast.warning(msg); // to display warning msg

