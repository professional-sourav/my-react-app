const TaskPagination = ({ nextButtonClick, previousButtonClick }) => {

    return (
        <>
            <div className="pagination">
                <button onClick={previousButtonClick}>Previous</button>
                <button onClick={nextButtonClick}>Next</button>
            </div>
        </>
    )
}

export default TaskPagination