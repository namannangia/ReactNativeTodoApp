export const mark_as_complete = (pay) => {
    return {
      type: 'MARK___COMPLETE'+pay,
    };
  };
   
  export const mark_as_incomplete = (pay) => {
    return {
      type: 'MARK_INCOMPLETE'+pay,
    };
  };

  export const addTask = (pay) => {
    return {
      type: 'ADD__NEW__TASK_'+pay,
    };
  };
  export const delete_all = () => {
    return {
      type: 'DELETE_ALL',
    };
  };