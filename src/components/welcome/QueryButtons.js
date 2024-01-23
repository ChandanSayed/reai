export default function QueryButtons({ setActionType }) {
  const buttonText = [{ name: 'Remodel' }, { name: 'Ask for advice' }, { name: 'List to sell' }, { name: 'Get transaction support' }, { name: 'Make a custom request' }];

  function handleButtonAction(type) {
    setActionType(type);
  }

  return (
    <div className="question-buttons max-w-512 w-full ml-auto mt-11">
      <h4 className="text-sm sm:text-base font-medium mb-1.5">I want to</h4>
      <p className="text-off-color text-xs sm:text-sm font-normal mb-4">Please choose one of the four main task below, or make custom request which will be supported separately</p>
      {buttonText.map((btn, i) => (
        <button onClick={() => handleButtonAction(btn.name)} className="rounded-lg border mr-2 mb-2 bg-white border-button-color py-2 px-4 text-sm sm:text-base font-normal" key={i}>
          {btn.name}
        </button>
      ))}
    </div>
  );
}
