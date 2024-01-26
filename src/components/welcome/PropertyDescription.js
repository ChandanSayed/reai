import Image from 'next/image';
import Edit from '/public/images/edit.svg';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

const inputText = 'Incredible property minutes from Canton Street & Downtown Roswell! Discover a rare hidden gem down a quaint private lane. This exquisite Southern Manor Home home is nestled within a Gated private enclave of 3 homes, just moments away from the charming Canton Street area. Pulling through the entry gate, you’re greeted by a meticulously curated landscape oasis, framing an entryway and front porch with gas lanterns, reminiscent of simpler days. An aura of casual elegance envelops this exquisite home, showcased by a Grand Master Suite on the main level, adorned with three walk-in closets and graced by custom barn doors. Step into the renovated ensuite Master Bath, an opulent retreat where custom vanities and lustrous limestone finishes create an ambiance of refined luxury, complemented by a splendid frame-less shower. Unleash your inner culinary artist in your Chef’s Dream Kitchen, adorned with marble counters, ship-lap ceilings with wood beams, top-of-the-line Thermador appliances & a Sub-Zero refrigerator. The Kitchen provides a dining area for casual meals or entertaining, while also providing seating options at the center island. The Kitchen seamlessly flows into a dramatic vaulted Keeping Room, with a welcoming stone fireplace, floor-to-ceiling windows, rustic ceiling treatments, and doors opening to captivating views of the secluded backyard. The Living Room is complete with meticulous craftsmanship, boasting extensive molding, a striking stone fireplace, and bespoke ship-lap detailing, all seamlessly blending with the vaulted screened-in porch with its cozy fireplace, which flows to the Master Suite and Grand Living Area. The downstairs also features a charming Dining Room suitable for seating 12 and a Study/Library, both flanking the airy 2-story entryway. Practicality meets elegance in the custom Pantry, Mudroom, and spacious Laundry Room, ensuring an organized and seamless family living experience. Venture upstairs to find three additional generously sized bedrooms, with one offering a delightful custom-built loft/play area, ideal for creating cherished memories. An unfinished basement awaits your imagination, primed with bathroom stubbing, a fireplace option, and ample bedroom, living, or exercise spaces all to fit your unique lifestyle. Step outdoors and be greeted by dramatic outdoor entertainment and living areas. A multi-tiered rear deck overlooks a picturesque stream and waterfall feature, complete with 2 stone bridges; one leading to a whimsical Kid’s Playhouse that will captivate their imaginations and the second leading to a beautiful Flag Stone Firepit & a large outdoor Pavilion with fireplace for entertaining family and friends. The yard is a true haven for gardening enthusiasts and provides fenced-in privacy for all your furry friends. An exquisite detached Carriage House provides a private enclave of living space, a sleeping area, a kitchen, a dining area, and a full bathroom, all perfect for hosting family, friends, or an au pair/mother-and-law suite! The home showcases meticulous updates throughout, boasting all-new HVAC systems, New Roofs on the Main Home and Carriage House, new Hot Water Heaters, Hardwood Flooring throughout, and breathtaking design choices that resonate throughout, resulting in an irresistible blend of timeless elegance and modern sophistication.';

export default function PropertyDescription() {
  const [showEdit, setShowEdit] = useState(false);
  const [activeSave, setActiveSave] = useState(false);

  const [desc, setDesc] = useImmer(inputText);
  const [editValue, setEditValue] = useImmer(inputText);

  function trimAndEllipsis(inputString, numWords) {
    // Remove leading and trailing whitespaces
    inputString = inputString.trim();

    // Split the string into an array of words
    const words = inputString.split(/\s+/);

    // Ensure the number of words to keep is not greater than the total number of words
    numWords = Math.min(numWords, words.length);

    // Join the first 'numWords' words and add "..." if there are more words
    let trimmedString = words.slice(0, numWords).join(' ');

    if (words.length > numWords) {
      trimmedString += '...';
    }

    return trimmedString;
  }

  const trimmedText = trimAndEllipsis(editValue, 49);

  const handleCancel = () => {
    setActiveSave(false);
    setShowEdit(false);
  };

  function handleInput(e) {
    setEditValue(draft => {
      draft[e.target.name] = e.target.value;
    });
  }

  function handleSave() {
    setDesc(draft => (draft = editValue));
    setActiveSave(false);
    setShowEdit(false);
  }

  useEffect(() => {
    setActiveSave(true);
  }, [editValue]);

  return (
    <div className="pl-4 sm:pl-6 rounded-xl border border-solid border-border-color mt-2.5 pt-6 pr-4 bg-white">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">General Description</h2>
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
      {!showEdit ? (
        <p className="pr-6 mt-8 mb-7 font-normal">
          {trimmedText}
          <a className="text-button-color" href="#">
            Read more
          </a>
        </p>
      ) : (
        <textarea type="text" value={editValue} className="rounded-lg border border-border-color w-full h-full p-3" rows={47} onChange={e => setEditValue(e.target.value)} />
      )}
    </div>
  );
}
