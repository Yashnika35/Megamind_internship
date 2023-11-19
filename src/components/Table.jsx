import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Select, Option } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

const TABS = [
  {
    label: "2022-2023",
    value: "2022-2023",
  },
  {
    label: "2021-2022",
    value: "2021-2022",
  },
  {
    label: "2020-2021",
    value: "2020-2021",
  },
  {
    label: "2019-2020",
    value: "2019-2020",
  },
  {
    label: "2018-2019",
    value: "2018-2019",
  },
  {
    label: "2017-2018",
    value: "2017-2018",
  },
  {
    label: "2016-2017",
    value: "2016-2017",
  },
];

const TABLE_HEAD = ["Sl No", "Date", "Company"];

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25); // Change to 25 for 25 rows per page
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("2022-2023");

  useEffect(() => {
    // Assuming you have a JSON file named data.json in the public folder
    fetch("/assets/companyData.json")
      .then((response) => response.json())
      .then((data) => setData(data.placementCompaniesData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter(
      (item) =>
        item.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date_from.includes(searchQuery) ||
        item.sno.includes(searchQuery)
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);
  const goToNextPage = () => setCurrentPage(currentPage + 1);

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event?.target?.value, 10);
    if (!isNaN(newItemsPerPage)) {
      setItemsPerPage(newItemsPerPage);
      setCurrentPage(1); // Reset to the first page when changing items per page
    }
  };

  return (
    <div className="px-40 py-16 bg-gray-200">
      <h1 className="lg:text-2xl uppercase">COMPANIES VISITED</h1>
      <hr className="w-24 h-1 bg-[#349e3b] my-2 mb-10" />
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Companies list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all the companies visited
              </Typography>
            </div>
            <div class="relative h-10 w-72 min-w-[200px]">
              <select
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Show Entries
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs
              value="2022-2023"
              className="w-full md:w-max text-blue-900 font-semibold text-xl"
            >
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>

            <div className="w-full md:w-72">
              <Input
                label="Search"
                type="text"
                placeholder=""
                value={searchQuery}
                onChange={handleSearch}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map(
                ({ company_logo, company_name, date_from }, index) => {
                  const isLast = index === currentItems.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={company_name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date_from}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={company_logo}
                            alt={company_name}
                            size="sm"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {company_name}
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page <span>{currentPage}</span> of{" "}
            <span>{Math.floor(data.length / itemsPerPage) + 1}</span>
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              ripple={true}
              color="black"
            >
              <strong>Previous</strong>
            </Button>
            <Button
              variant="outlined"
              onClick={goToNextPage}
              disabled={indexOfLastItem >= data.length}
              ripple={true}
              color="black"
            >
              <strong>Next</strong>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Table;
