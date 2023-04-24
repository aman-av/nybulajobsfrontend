import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'

export function SortableItem(props) {
    // props.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card style={{backgroundColor:props.data.color}} body className="m-3">
                <Row>
                
                    <h4>Title  :  {props.data.title}</h4>
                    <Col xs={12} lg={ 6}>
                <p> Contact email : { props.data.email}</p>
                <p> Contact Phone Number : { props.data.phonenumber}</p>
                    </Col>
                    <Col xs={12} lg={ 6}>
                <p> Job Location : {props.data.location}</p>
                <p> Deadline : { (new Date(props.data.deadline)).toLocaleDateString('en-IN')}</p>
                    </Col>
                <p>Description : {props.data.description}</p>
                </Row>
            </Card>
        </div>
    )
}