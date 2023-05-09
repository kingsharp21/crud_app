import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";


function Contacts({firstname, lastname, number}) {
    return ( 
        <div className="list">
            <div className="number">
              <p>{`${firstname}' '${lastname}`}</p>
              <span>
                {" "}
                <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                {number}
              </span>
            </div>
            <DeleteForeverIcon
              style={{ fill: "red", fontSize: 28, cursor: "pointer" }}
            titleAccess="delete"/>
          </div>
     );
}

export default Contacts;