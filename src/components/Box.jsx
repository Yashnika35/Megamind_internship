const Box = () => {
  return (
    <div class="bg-[#213557] text-white flex flex-col lg:flex-row gap-16 px-40 py-16 justify-between">
      {/* Mission / Vision / Contact */}
      <div class="max-w-md">
        <h4 class="font-bold text-lg flex gap-4 items-center">MISSION</h4>
        <ul class="list-disc ml-6 mt-4">
          <li>
            To provide all students adequate training / internship opportunities
            to get placed in the industry of their choice.
          </li>
          <li>To provide the industry with skilled human resources.</li>
          <li>To make it a joy for all stake holders to work with us.</li>
        </ul>
      </div>
      <div class="max-w-md">
        <h4 class="font-bold text-lg flex gap-4 items-center">VISION</h4>
        <p class="mt-4">
          To ensure that every student leaves the portal of the college with the
          desired offer in hand.
        </p>
      </div>
      <div>
        <h4 class="font-bold text-lg flex gap-4 items-center">CONTACT</h4>
        <p class="mt-4">
          <strong>Prof. Rashmi Bhandary</strong>
        </p>
        <p class="">Dean - Career Guidance, Training &amp; Placement</p>
        <p class="">Cell: +91 99864 75517, Tele: +91 824 2277222</p>
        <p class="">Email: rb.placement@sahyadri.edu.in</p>
      </div>
    </div>
  );
};
export default Box;
