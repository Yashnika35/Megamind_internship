import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  const [activeTab, setActiveTab] = React.useState("faculty");
  const [user, setUser] = React.useState("Username");
  const [backGround, setBackGround] = React.useState(
    "bg-gradient-to-r from-cyan-500 to-indigo-500"
  );
  const [color, setColor] = React.useState("bg-blue-800");
  const [sPassword, setSPassword] = React.useState("password");
  const [show, setShow] = React.useState("Show");
  const [button, setButton] = React.useState("blue");
  const data = [
    {
      label: "Faculty Login",
      value: "faculty",
      color: "blue",
      user: "Username",
      color: "bg-blue-800",
      bg: "bg-gradient-to-r from-cyan-500 to-indigo-500",
      button: "blue",
    },
    {
      label: "Student Login",
      value: "student",
      color: "pink",
      user: "Admission No.",
      color: "bg-pink-400",
      bg: "bg-gradient-to-l from-purple-400 to-pink-400",
      button: "pink",
    },
  ];
  return (
    <div className="m-0 flex flex-row h-screen w-screen">
      <div className="min-w-min w-3/4  bg-black">
        <img src="./img/Login.png" alt="sahyadri" className="h-screen" />
      </div>
      <div className={backGround}>
        <div className="pt-20">
          <img
            src="./img/logo.png"
            alt=""
            className="animate-bounce w-32 mx-auto"
          />
        </div>
        <div className="bg-white my-12 mx-32 py-8 px-10 rounded-lg">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 drop-shadow-xl shadow-light-blue-800"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value, user, bg, color, button }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => {
                    setUser(user);
                    setActiveTab(value);
                    setBackGround(bg);
                    setColor(color);
                    setButton(button);
                  }}
                  className={
                    activeTab === value
                      ? "text-gray-900 font-bold text-xl drop-shadow-lg"
                      : " w-80"
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              <Card color="transparent" shadow={false}>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 pl-2"
                    >
                      {user} :
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={user}
                      className="rounded-3xl !border-t-blue-gray-200 focus:!border-t-gray-900 mx-auto"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 pl-2 flex flex-row"
                    >
                      Password :
                    </Typography>
                    <Input
                      type={sPassword}
                      size="lg"
                      placeholder="Password"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-3xl mx-auto"
                      labelProps={{
                        className: "before:content-none after:content-none ",
                      }}
                    />
                  </div>
                  <Checkbox
                    label={
                      <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                      >
                        {show} Password
                      </Typography>
                    }
                    color={button}
                    onChange={() => {
                      if (sPassword === "password") {
                        setSPassword("text");
                        setShow("Hide");
                      } else if (sPassword === "text") {
                        setSPassword("password");
                        setShow("Show");
                      }
                    }}
                    containerProps={{ className: "-ml-2.5" }}
                  />
                  <br />
                  <Button className="rounded-full px-32 mx-10" color={button}>
                    Login
                  </Button>
                </form>
              </Card>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default Login;
