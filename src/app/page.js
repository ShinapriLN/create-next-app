import Slideimg from "@/components/slideimg/slideimg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './home.css';

export default function Home() {
  const noteEl = Array.from({ length: 12 }, (_, i) => (
    <div className="el-note">
      <div className="note"><p>Test AA OKOKOK? Hello?</p></div>
    </div>
  ));
  return (
    <div>
      <Slideimg />
      <div className="w-full h-[100vh] bg-gradient-to-b from-blue-800 from-5% to-neutral-950 to-20% flex justify-center">
        <div className="w-[60%] h-full content-center">
          <div>
            <h1 className={`text-[30px] text-center text-white`} style={{ textShadow: '0 0 3px white' }}>NOTE</h1>
          </div>
          <div className="w-full h-[80%] bg-gradient-to-b from-blue-950 to-neutral-950 opacity-100 p-8 flex flex-col justify-between rounded-md">
            <div className="container w-full h-[75%] overflow-y-scroll">
              {noteEl}
            </div>
            <div className="w-full h-[20%] flex justify-around gap-4 text-white text-[1.5rem]">
              <div className="pre-btn-note">
                <div className="btn-note">
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                  <p>Add</p>
                </div>
              </div>
              <div className="pre-btn-note">
                <div className="btn-note">
                  <FontAwesomeIcon icon="fa-solid fa-pen-nib" />
                  <p>Modify</p>
                </div>
              </div>
              <div className="pre-btn-note">
                <div className="btn-note">
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                  <p>Select</p>
                </div>
              </div>
              <div className="pre-btn-note">
                <div className="btn-note">
                  <FontAwesomeIcon icon="fa-solid fa-delete-left" />
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
