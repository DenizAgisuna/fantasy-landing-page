import CardSideImage from "./card";
import Divider from "./divider";

function MainGrid({ shortDescription, longDescription }) {
  return (
    <div className="flex justify-center py-16 bg-base-200">
      {" "}
      <div className=" w-1/1" style={{ margin: "auto" }}>
        <div className="md:hidden xl:flex xs:grid">
          <CardSideImage description={shortDescription} displayText={"none"} />
          <CardSideImage description={shortDescription} displayText={"none"} />
          <CardSideImage description={shortDescription} displayText={"none"} />
        </div>
        <Divider className="md:hidden"></Divider>
        <div className="flex">
          <CardSideImage theme="halloween" description={shortDescription} />
          <CardSideImage description={shortDescription} />
        </div>
        <CardSideImage
          theme="night"
          buttonPosition={"start"}
          description={longDescription}
        />
      </div>
    </div>
  );
}
export default MainGrid;
