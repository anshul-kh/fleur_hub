import React from "react";


export default function TableWarpper({
  children,
}: {
  children: React.ReactElement[];
}) {
  return (
    <div className="flex flex-col gap-3 border-1 border-white text-white rounded-xl p-2 md:w-4/6">
      <table class="table-auto w-full">
        <thead>
          <tr className="w-full bg-gradient-to-b from-[#00FFC2] text-transparent to-transparent bg-clip-text">
            <th>S.No</th>
            <th>Date Uploaded</th>
            <th>Tested</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
