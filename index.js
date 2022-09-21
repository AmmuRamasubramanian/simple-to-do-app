
window.addEventListener("load",()=>{
    const form=document.querySelector("#newTask-form");
    const inputValue=document.querySelector("#newTask-input")
    const taskList=document.querySelector("#tasks")

    window.addEventListener("submit",(e)=>{
        e.preventDefault();
       
        const tasks=inputValue.value;
        if (!tasks){
            alert("please fill out the task!");
            return;
        }

        const task_element=document.createElement("div");
       task_element.classList.add("task-content");

       const task_input_el=document.createElement("input")
       task_element.classList.add("inputText");
       task_input_el.type='text';
       task_input_el.value=tasks;
       task_input_el.setAttribute('readonly','readonly');

       task_element.appendChild(task_input_el);

       task_action_el=document.createElement("div");
       task_action_el.classList.add("actions");

       task_edit_el=document.createElement("button");
       task_edit_el.classList.add('Edit');
       task_edit_el.innerHTML="Edit";

       task_delete_el=document.createElement("button");
       task_delete_el.classList.add("Delete");
       task_delete_el.innerHTML="Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_element.appendChild(task_action_el);

       taskList.appendChild(task_element);

       inputValue.value="";

      task_edit_el.addEventListener("click",()=>{
        if (task_edit_el.innerText=='Edit'){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText="Save";
        }else{
            task_input_el.setAttribute("readonly","readonly");
            task_edit_el.innerText="Edit";
        }
      })

      task_delete_el.addEventListener("click",()=>{
        taskList.removeChild(task_element);
      })

        })
})