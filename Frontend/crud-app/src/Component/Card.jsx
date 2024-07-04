/* eslint-disable react/prop-types */
import image from '../assets/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg'
const Photo = ({ user }) => {
  return (
    <>
      <div className="flex w-screen items-center justify-around pb-2 ">
        <tr className="flex justify-around w-full">
          <th>{user.id}</th>
          <td>
            <img src={image} alt="" className="h-20 w-20 rounded-md" />
          </td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </div>
    </>
  );
};

export default Photo