import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const {guests, events} = useTypedSelector(state => state.event)
    const {fetchGuests, createEvent} = useActions()
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    const addNewEvent = (event: IEvent) => {
        createEvent(event)
        closeModal()
    }
    useEffect(() => {
        fetchGuests()
    }, [])
    return (
        <Layout>
            {JSON.stringify(events)}
            <EventCalendar events={events}/>
            <Row justify={"center"}>
                <Button
                    onClick={openModal}
                >
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title='Добавить событие'
                visible={modalVisible}
                footer={null}
                onCancel={closeModal}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;