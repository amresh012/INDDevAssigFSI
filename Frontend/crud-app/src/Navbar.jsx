import Button from "./Component/Button";

const Navbar = () => {
    let CRUD = ["Create", "Update" , "Get", "Delete"]
  return (
    <div>
      <div className="flex  items-center gap-12 w-full mb-12 ">
              {CRUD.map((text,index) => {
                  return (
                      <Button key={ index} link="/" text={text} />
            )
        })}
      </div>
    </div>
  );
}

export default Navbar