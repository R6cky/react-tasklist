import { Header } from "../Header";
import { TaskList } from "../TaskList";
import { MainStyled } from "./style";

export const Main = ({
  openTaskModal,
  setIsModalTrashActive,
  taskList,
  removeTaskList,
}: any) => {
  return (
    <MainStyled>
      <Header />
      <div className="header-area">
        <div className="header-todo">
          <h2>Welcome, user!</h2>
          <span className="add-task-button" onClick={openTaskModal}>
            <p>+</p>
          </span>
        </div>
        <div className="trash" onClick={() => setIsModalTrashActive(true)}>
          Lixeira
        </div>
      </div>
      <TaskList taskList={taskList} removeTaskList={removeTaskList}></TaskList>
    </MainStyled>
  );
};
