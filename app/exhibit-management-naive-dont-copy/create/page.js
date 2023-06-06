import React from 'react';
import { createExhibit } from '../../../database/exhibits';

export default async function CreateExhibitPage(props) {
  const exhibit = await createExhibit(
    props.searchParams.name,
    props.searchParams.type,
    props.searchParams.price,
    props.searchParams.img,
    props.searchParams.alt,
  );

  return <div>Exhibit with name {exhibit.name} is created</div>;
}
