import Image from 'next/image';
import Edit from '/public/images/edit.svg';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

export default function PropertyDetails() {
  const [showEdit, setShowEdit] = useState(false);
  const [activeSave, setActiveSave] = useState(false);
  const [properties, setProperties] = useImmer({
    title: '1743 Round Table Drive, Orlando, Florida',
    bed: 3,
    bath: 4.5,
    sqft: 5444,
    acre: 0.76
  });
  const [editValue, setEditValue] = useImmer({
    title: '1743 Round Table Drive, Orlando, Florida',
    bed: 3,
    bath: 4.5,
    sqft: 5444,
    acre: 0.76
  });

  function formatNumber(number) {
    return number.toLocaleString('en-US'); // 'en-US' represents the locale for the United States, adjust it based on your requirements
  }

  const handleCancel = () => {
    setActiveSave(false);
    setShowEdit(false);
  };

  function handleInput(e) {
    setEditValue(draft => {
      if (e.target.name === 'bed' || e.target.name === 'sqft') {
        // Check if the input matches the pattern (only numbers)
        if (/^\d*$/.test(e.target.value)) {
          draft[e.target.name] = e.target.value;
        }
      } else {
        if (/^-?\d*\.?\d*$/.test(e.target.value)) {
          draft[e.target.name] = e.target.value;
        }
      }
    });
  }

  function handleSave() {
    setProperties(draft => (draft = editValue));
    setActiveSave(false);
    setShowEdit(false);
  }

  useEffect(() => {
    if (!editValue.title || !editValue.bed || !editValue.acre || !editValue.bath || !editValue.sqft) {
      setActiveSave(false);
    } else {
      setActiveSave(true);
    }
  }, [editValue]);

  return (
    <div className="rounded-xl border border-solid bg-white border-border-color pl-4 sm:pl-6 pt-6 mt-5 pr-4 pb-5">
      <div className="flex justify-between">
        {!showEdit ? <h2 className="text-lg sm:text-xl font-medium flex-1">{properties.title}</h2> : <input type="text" onChange={handleInput} name="title" value={editValue.title} className="flex-1 text-lg sm:text-xl font-medium rounded-lg border border-border-color px-2 py-2 mr-1" />}
        {!showEdit ? (
          <button onClick={() => setShowEdit(true)} className="w-10 h-10 bg-button-color rounded-lg text-center p-3">
            <Image src={Edit} alt="Edit" />
          </button>
        ) : (
          <div className="ml-4">
            <button onClick={handleCancel} className="underline">
              Cancel
            </button>
            <button disabled={!activeSave} onClick={handleSave} className={`${activeSave ? 'bg-button-color' : 'bg-button-disabled'} rounded-lg py-3 px-5 ml-4 text-white text-sm sm:text-15`}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="text-base flex flex-wrap mt-3">
        <div className="flex items-center mr-6">
          {!showEdit ? <p className="font-semibold mr-1">{properties.bed}</p> : <input type="text" onChange={handleInput} name="bed" value={editValue.bed} className="w-16 text-right rounded-lg border border-border-color px-2 py-2 mr-1" />}
          <p className="">bed</p>
        </div>
        <div className="flex items-center mr-6">
          {!showEdit ? <p className="font-semibold mr-1">{properties.bath}</p> : <input type="text" onChange={handleInput} name="bath" value={editValue.bath} className="w-16 text-right rounded-lg border border-border-color px-2 py-2 mr-1" />}
          <p className="">bath</p>
        </div>
        <div className="flex items-center mr-6">
          {!showEdit ? <p className="font-semibold mr-1">{formatNumber(properties.sqft)}</p> : <input type="text" onChange={handleInput} name="sqft" value={editValue.sqft} className="w-16 text-right rounded-lg border border-border-color px-2 py-2 mr-1" />}
          <p className="">sqft</p>
        </div>
        <div className="flex items-center mr-6">
          {!showEdit ? <p className="font-semibold mr-1">{properties.acre}</p> : <input type="text" onChange={handleInput} name="acre" value={editValue.acre} className="w-16 text-right rounded-lg border border-border-color px-2 py-2 mr-1" />}
          <p className="">acre lot</p>
        </div>
      </div>
    </div>
  );
}
