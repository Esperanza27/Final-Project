import Spinner from "react-bootstrap/Spinner";

const MyLoader = () => {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#495057" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Spinner
          animation="border"
          variant="info"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      </div>
    </div>
  );
};

export { MyLoader };
