import React from 'react';
import { updateExhibitById } from '../../../../database/exhibits';

export default async function UpdateExhibitPage(props) {
  const exhibit = await updateExhibitById(
    props.params.exhibitId,
    props.searchParams.name,
    props.searchParams.type,
    props.searchParams.price,
    props.searchParams.img,
    props.searchParams.alt,
  );
  return <div>Exhibit with id {exhibit.id} Updated</div>;
}
