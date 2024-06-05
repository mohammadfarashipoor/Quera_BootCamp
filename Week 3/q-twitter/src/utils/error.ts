import { toast } from "react-toastify";

const handleError = (err, dispatch, title = "") => {
  const unsuccessfulOptions = {
    title: `${title}`,
    message: ``,
  };

  if (err.response) {
    if (err.response.status === 400) {
      unsuccessfulOptions.title = title ? title : "لطفا دوباره تلاش کنید";
      unsuccessfulOptions.message = err.response.data.message;
      if (unsuccessfulOptions.message) {
        toast.error(` ${unsuccessfulOptions.message}`);
      }
      toast.error(`${unsuccessfulOptions.title} `);
    } else if (err.response.status === 404) {
      unsuccessfulOptions.title =
        err.response.data.message ||
        "درخواست شما با مشکلی مواجه شد. لطفا دوباره تلاش کنید.";
      toast.error(`${unsuccessfulOptions.title} `);
    } else if (err.response.status === 401) {
      unsuccessfulOptions.message = "دسترسی غیرمجاز! لطفا دوباره وارد شوید";
      toast.error(` ${unsuccessfulOptions.message}`);
      toast.error(`${unsuccessfulOptions.title} `);
    } else if (err.response.status === 403) {
      unsuccessfulOptions.message =
        "Ops! شما اجازه دسترسی به این منبع را ندارید.";
      toast.error(` ${unsuccessfulOptions.message}`);
      toast.error(`${unsuccessfulOptions.title} `);
    }
  } else if (err.message) {
    unsuccessfulOptions.message = err.message;
    toast.error(` ${unsuccessfulOptions.message}`);
    toast.error(`${unsuccessfulOptions.title} `);
  } else {
    unsuccessfulOptions.message =
      "درخواست شما با مشکلی مواجه شد. لطفا دوباره تلاش کنید.";
    toast.error(` ${unsuccessfulOptions.message}`);
  }
};

export default handleError;
