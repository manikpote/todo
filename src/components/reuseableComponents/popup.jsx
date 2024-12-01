import { Login } from "../todoList/login";
import logo from "../todoList/img.png";
import { Tooltip } from "react-tooltip";

export const Popup = () => {
  return (
    <>
      <img
        src={logo}
        className="h-8 mb-5 cursor-pointer"
        data-tooltip-id="add"
        onClick={() => document.getElementById("my_modal").showModal()}
      />
      <Tooltip id="add" content="Add user" place="bottom" />
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn outline-none">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
