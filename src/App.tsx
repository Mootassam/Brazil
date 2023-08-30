import { useRef, useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Screenshot from "./shared/Screenshot";

import { DrawingApp } from "./shared/DrawingApp";
import Red from "./component/red/Red";
import Recebido from "./component/Recebido/Recebido";
import Personal from "./component/Personal/Personal";
import Pblack from "./component/Pblack/Pblack";
import Pagamento from "./component/Pagamento/pagamento";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("Pblack");
  const [amount, setAmount] = useState(100);
  const [size, setSize] = useState("small");
  const [
    { cursor, canvasRef, color },
    { startDrawing, draw, endDrawing, ...api },
  ] = DrawingApp();
  const toolbarProps = { color, ...api };
  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setAmount={setAmount}
          setSize={setSize}
          size={value}
          {...toolbarProps}
        />
        <div className="content" ref={divRef}>
          <div className="app__canvas">
            {value === "pagamento" ? (
              <canvas
                ref={canvasRef as any}
                width={550}
                height={801}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : (
              <canvas
                ref={canvasRef as any}
                width={360}
                height={820}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            )}
          </div>

          {value === "red" && <Red amount={amount} />}
          {value === "recebido" && <Recebido amount={amount} />}
          {value === "personal" && <Personal amount={amount} />}
          {value === "Pblack" && <Pblack amount={amount} />}
          {value === "pagamento" && <Pagamento amount={amount} />}
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
