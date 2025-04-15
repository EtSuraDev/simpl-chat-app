function Groups() {
  const text = [
  { groupName: "React Devs", lastText: "Hey there, welcome!" },
  // { groupName: "Team Alpha", lastText: "Project updates?" },
  // { groupName: "Design Team", lastText: "New UI mockups ready for review" },
  // { groupName: "Backend Squad", lastText: "API endpoints updated" },
  // { groupName: "QA Team", lastText: "Found some bugs to fix" },
  // { groupName: "Marketing", lastText: "Campaign launch tomorrow" },
  // { groupName: "Product Team", lastText: "New features discussion" },
  // { groupName: "Support Group", lastText: "Customer feedback received" },
  // { groupName: "DevOps", lastText: "Deployment successful" },
  // { groupName: "HR Updates", lastText: "Team building event next week" }
];

  return (
    <div className="flex flex-col gap-4 w-[300px] text-white overflow-hidden hover:overflow-scroll h-full p-2 scroll-smooth group-box relative ">
      <h1 className="text-2xl font-bold sticky top-0 bg-gray-900 p-2 ">
        Groups
      </h1>
      {text.map((item, index) => (
        <div
          key={index}
          className="bg-gray-700 hover:bg-gray-600 px-2 py-2 h-fit flex rounded-2xl gap-2 items-center cursor-pointer"
        >
          <div className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center rounded-full bg-gray-600">
            <img src="./send.png" className="max-w-[24px]" alt="PHOTO" />
          </div>
          <div className="overflow-hidden">
            <h3 className="font-bold text-[16px]">{item.groupName}</h3>
            <p className="text-[12px] font-light text-ellipsis whitespace-nowrap overflow-hidden max-w-[200px]">
              {item.lastText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Groups;
