import { Header } from "../Header";
import { TaskList } from "../TaskList";
import { MainStyled } from "./style";
import { BsTrash } from "react-icons/bs";

export const Main = ({
  openTaskModal,
  setIsModalTrashActive,
  taskList,
  removeTaskList,
  setIsModalViewActive,
  isModalViewActive,
  viewTask,
  taskData,
}: any) => {
  return (
    <MainStyled>
      <Header />
      <div className="header-area">
        <div className="header-todo">
          <span
            className="add-task-button"
            onClick={openTaskModal}
            title="Criar nova lista"
          >
            <p>+</p>
          </span>
        </div>
        <select className="select-list" name="" id="">
          <option value="">Tarefas feitas</option>
          <option value="">Tarefas pendentes</option>
        </select>
        <div
          className="trash-div"
          title={"lixeira"}
          onClick={() => setIsModalTrashActive(true)}
        >
          <BsTrash className="trash" />
        </div>
      </div>
      <TaskList
        taskList={taskList}
        removeTaskList={removeTaskList}
        setIsModalViewActive={setIsModalViewActive}
        isModalViewActive={isModalViewActive}
        viewTask={viewTask}
        taskData={taskData}
      ></TaskList>
    </MainStyled>
  );
};
