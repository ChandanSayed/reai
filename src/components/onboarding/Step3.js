import img1 from '/public/images/image.png';
import Room from '/public/images/roomimg.png';
import tv from '/public/images/tvimg.png';
import cher from '/public/images/cherimg.png';
import Image from 'next/image';

import Close from '/public/images/close.png';
import { useState } from 'react';

export default function Step3() {
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState('');
  function handleForm(e) {
    e.preventDefault();

    setTags(prev => prev.concat(tagValue));
    setTagValue('');
  }

  function deleteTag(i) {
    setTags(prevTags => {
      const newTags = [...prevTags];
      newTags.splice(i, 1);
      return newTags;
    });
  }

  return (
    <section className="max-w-580 p-8 w-full bg-white m-auto my-16 h-712 border-text-color shadow-onboard-shadow rounded-xl border-solid">
      <div className="mb-12">
        <h5 className="text-xl font-medium">In this step you can provide images of your home</h5>
        <p className="text-15 font-normal mt-3">If you provide images you can get quick results after the onboarding.</p>
      </div>
      <h5 className="font-semibold mb-3">Images</h5>
      {/* <div className="border px-4 py-6 flex rounded-lg gap-2.5	justify-center pt-6">
        <Image src={img1} alt="Im" />
        <Image src={Room} alt="Room" />
        <Image src={tv} alt="tv" />
        <Image src={cher} alt="cher" />
      </div> */}
      <div className="w-full border mt-3 rounded-lg">
        <button className="w-32 block bg-button-color text-white h-10 rounded-lg font-semibold text-center mx-auto mt-16 mb-4">Choose</button>
        <p className="text-sm	font-medium mb-7 text-center">Or drag & drop</p>
      </div>
      <p className="mt-8 mb-2.5 text-15 font-medium">Please also provide any latest renovation, upgrade made on your property, so we can provide better guidance ahead (multiple renovations can be separated by ‘,’)</p>
      <div>
        <form action="/" onSubmit={handleForm}>
          <input disabled={tags.length === 2} className="border border-border-color text-15 w-full h-14 rounded-lg px-4" placeholder="i.e ‘bathroom’" type="text" name="tag" value={tagValue} onChange={e => setTagValue(e.target.value)} required />
        </form>
      </div>
      <div className="mt-3.5 text-base	font-medium gap-2.5	flex">
        {tags.map((tag, i) => (
          <button key={i} className="text-center text-sm py-1.5 px-2 border border-button-color rounded-full group flex gap-1 items-center pl-4">
            {tag}
            <Image src={Close} onClick={() => deleteTag(i)} alt="Close" className="opacity-0 group-hover:opacity-100 w-3" />
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-5">
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
      </div>
      <h4 className="text-sm text-center my-3 text-button-color">Skip</h4>
      <div className="w-full mb-8">
        <button disabled={true} className="w-32 block mx-auto bg-button-disabled font-semibold	 text-white h-10 rounded-lg">
          Next
        </button>
      </div>
    </section>
  );
}