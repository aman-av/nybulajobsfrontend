import Container from 'react-bootstrap/Container';
import {  DndContext,  closestCenter} from "@dnd-kit/core";
import {  arrayMove,  SortableContext,  verticalListSortingStrategy} from "@dnd-kit/sortable";
import { useState,useEffect } from 'react';
import { SortableItem } from './SortableItem';
import axios from 'axios';

function Draganddrop() {
  const [listitem, setListitem] = useState([]);
    const [jobdata, setJobdata] = useState({});
    const populatearray = async() => {
        
        const response = await axios.get('https://nybulajobsbackend.cyclic.app/jobs/getorder');
        const response2 = await axios.get('https://nybulajobsbackend.cyclic.app/jobs/alljobs');
        console.log(response2)
        console.log(response)
        setJobdata(response2.data);
        setListitem(response.data);
    }
    useEffect(() => {
        populatearray();
    }, []);
    
    const updatelist = async () => {
        await axios.post('http://localhost:8000/jobs/updateorder', listitem);
    }
    useEffect(() => {
        if(listitem.length>0)
        updatelist();
    }, [listitem]);
    
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className="p-3" style={{"width": "100%"}} align="center">
        <h3>Listed Jobs</h3>
        <SortableContext
          items={listitem}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {listitem?listitem.map(item => <SortableItem data={jobdata[item]} key={item} id={item}/>):<></>}
        </SortableContext>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setListitem((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
        // items: [2, 3, 1]   0  -> 2
        // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
      });
      
    }
  }
}

export default Draganddrop;