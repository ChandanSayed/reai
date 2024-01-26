import Image from 'next/image';
import Edit from '/public/images/edit.svg';
import { useImmer } from 'use-immer';
import { useEffect, useState } from 'react';
import Close from '/public/images/close.png';
import { MdAdd } from 'react-icons/md';

export default function PropertyFeatures() {
  const [showEdit, setShowEdit] = useState(false);
  const [activeSave, setActiveSave] = useState(false);
  const [bedrooms, setBedrooms] = useImmer([
    {
      name: 'Bedrooms: 5',
      id: 1
    },
    {
      name: 'Bedrooms on main level: 1',
      id: 2
    }
  ]);
  const [editBedrooms, setEditBedrooms] = useImmer([
    {
      name: 'Bedrooms: 5',
      id: 1
    },
    {
      name: 'Bedrooms on main level: 1',
      id: 2
    }
  ]);
  const [bathrooms, setBathrooms] = useImmer([
    {
      name: 'Total Bathrooms: 1',
      id: 1
    },
    {
      name: 'Full bathrooms: 4',
      id: 2
    },
    {
      name: '1/2 Bathrooms: 1',
      id: 3
    },
    {
      name: 'Bathrooms on main level: 1',
      id: 4
    },
    {
      name: 'Primary Bathroom features: double vanity, separate tub/shower',
      id: 5
    }
  ]);
  const [editBathrooms, setEditBathrooms] = useImmer([
    {
      name: 'Total Bathrooms: 1',
      id: 1
    },
    {
      name: 'Full bathrooms: 4',
      id: 2
    },
    {
      name: '1/2 Bathrooms: 1',
      id: 3
    },
    {
      name: 'Bathrooms on main level: 1',
      id: 4
    },
    {
      name: 'Primary Bathroom features: double vanity, separate tub/shower',
      id: 5
    }
  ]);
  const [interiors, setInteriors] = useImmer([
    {
      name: 'Beamed Ceilings',
      id: 1
    },
    {
      name: 'High Ceilings',
      id: 2
    },
    {
      name: 'Double Vanity',
      id: 3
    },
    {
      name: 'Flooring: Brick, Hardwood, Pine',
      id: 4
    },
    {
      name: 'Entrance foyer 2 story',
      id: 5
    },
    {
      name: 'Tray Ceilings',
      id: 6
    },
    {
      name: 'Smart Home',
      id: 7
    },
    {
      name: 'Crown Molding',
      id: 8
    },
    {
      name: 'Entrance foyer',
      id: 9
    }
  ]);
  const [editInteriors, setEditInteriors] = useImmer([
    {
      name: 'Beamed Ceilings',
      id: 1
    },
    {
      name: 'High Ceilings',
      id: 2
    },
    {
      name: 'Double Vanity',
      id: 3
    },
    {
      name: 'Flooring: Brick, Hardwood, Pine',
      id: 4
    },
    {
      name: 'Entrance foyer 2 story',
      id: 5
    },
    {
      name: 'Tray Ceilings',
      id: 6
    },
    {
      name: 'Smart Home',
      id: 7
    },
    {
      name: 'Crown Molding',
      id: 8
    },
    {
      name: 'Entrance foyer',
      id: 9
    }
  ]);

  const handleCancel = () => {
    setActiveSave(false);
    setShowEdit(false);
  };

  function handleSave() {
    setBedrooms(draft => (draft = editBedrooms));
    setBathrooms(draft => (draft = editBathrooms));
    setInteriors(draft => (draft = editInteriors));
    setActiveSave(false);
    setShowEdit(false);
  }

  useEffect(() => {
    setActiveSave(true);
  }, [editBedrooms, editBedrooms, editInteriors]);

  const addEditBedroom = () => {
    setEditBedrooms(draft => {
      draft.push({ id: new Date().getTime(), name: '' });
    });
  };
  const addEditBathroom = () => {
    setEditBathrooms(draft => {
      draft.push({ id: new Date().getTime(), name: '' });
    });
  };
  const addEditInterior = () => {
    setEditInteriors(draft => {
      draft.push({ id: new Date().getTime(), name: '' });
    });
  };

  function handleEditBedroom(e) {
    setEditBedrooms(draft => {
      draft[e.target.id].name = e.target.value;
    });
  }

  function handleDeleteBedroom(id) {
    setEditBedrooms(prev => prev.filter(list => list.id != id));
  }
  function handleEditBathroom(e) {
    setEditBathrooms(draft => {
      draft[e.target.id].name = e.target.value;
    });
  }

  function handleDeleteBathroom(id) {
    setEditBathrooms(prev => prev.filter(list => list.id != id));
  }

  function handleEditInterior(e) {
    setEditInteriors(draft => {
      draft[e.target.id].name = e.target.value;
    });
  }

  function handleDeleteInterior(id) {
    setEditInteriors(prev => prev.filter(list => list.id != id));
  }

  return (
    <div className="rounded-xl border border-solid bg-white border-border-color pl-4 sm:pl-6 pt-6 pr-4 mt-2.5">
      <div className="features pb-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-medium">Property Features</h2>
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
        <div className="mt-7">
          <h3 className="text-sm sm:text-15 font-bold mb-2.5">Bedrooms</h3>
          <ul className="flex flex-wrap list-disc pl-4">
            {!showEdit
              ? bedrooms.map((bedroom, i) => {
                  return (
                    <li className="w-1/2 text-sm sm:text-15 mb-1.5" key={i}>
                      {bedroom.name}
                    </li>
                  );
                })
              : editBedrooms.map((bedroom, i) => {
                  return (
                    <li className="w-full text-sm sm:text-15 mb-1.5 list-disc" key={i}>
                      <input id={i} type="text" className="border border-border-color p-3 flex-1 w-[calc(100%-40px)]" value={bedroom.name} onChange={handleEditBedroom} /> <Image onClick={() => handleDeleteBedroom(bedroom.id)} className="inline-flex ml-1 cursor-pointer" src={Close} quality={100} alt="Close" />
                    </li>
                  );
                })}
          </ul>
          {showEdit && (
            <button className="block mx-auto mt-4 text-sm sm:text-15 font-normal" onClick={addEditBedroom}>
              <MdAdd className="inline-block" /> <u>Add Feature</u>
            </button>
          )}
        </div>
        <div className="mt-6">
          <h3 className="text-sm sm:text-15 font-bold mb-2.5">Bathrooms</h3>
          <ul className="flex flex-wrap list-disc pl-4">
            {!showEdit
              ? bathrooms.map((bathroom, i) => {
                  return (
                    <li className="w-1/2 text-sm sm:text-15 mb-1.5" key={i}>
                      {bathroom.name}
                    </li>
                  );
                })
              : editBathrooms.map((bathroom, i) => {
                  return (
                    <li className="w-full text-sm sm:text-15 mb-1.5 list-disc" key={i}>
                      <input id={i} type="text" className="border border-border-color p-3 flex-1 w-[calc(100%-40px)]" value={bathroom.name} onChange={handleEditBathroom} /> <Image onClick={() => handleDeleteBathroom(bathroom.id)} className="inline-flex ml-1 cursor-pointer" src={Close} quality={100} alt="Close" />
                    </li>
                  );
                })}
          </ul>
          {showEdit && (
            <button className="block mx-auto mt-4 text-sm sm:text-15 font-normal" onClick={addEditBathroom}>
              <MdAdd className="inline-block" /> <u>Add Feature</u>
            </button>
          )}
        </div>
        <div className="mt-6">
          <h3 className="text-sm sm:text-15 font-bold mb-2.5">Interior Features</h3>
          <ul className="flex flex-wrap list-disc pl-4">
            {!showEdit
              ? interiors.map((interior, i) => {
                  return (
                    <li className="w-1/2 text-sm sm:text-15 mb-1.5" key={i}>
                      {interior.name}
                    </li>
                  );
                })
              : editInteriors.map((interior, i) => {
                  return (
                    <li className="w-full text-sm sm:text-15 mb-1.5 list-disc" key={i}>
                      <input id={i} type="text" className="border border-border-color p-3 flex-1 w-[calc(100%-40px)]" value={interior.name} onChange={handleEditInterior} /> <Image onClick={() => handleDeleteInterior(interior.id)} className="inline-flex ml-1 cursor-pointer" src={Close} quality={100} alt="Close" />
                    </li>
                  );
                })}
          </ul>
          {showEdit && (
            <button className="block mx-auto mt-4 text-sm sm:text-15 font-normal" onClick={addEditInterior}>
              <MdAdd className="inline-block" /> <u>Add Feature</u>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
