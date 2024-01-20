import Header from './Header';

export default function Confirmation({ userDetails }) {
  return (
    <div className="max-w-580 w-full rounded-10 bg-white p-4 md:p-8 min-h-formHeight">
      <Header />
      <p className="text-15 font-medium">Confirmation</p>
      <p className="text-15 mt-4">A confirmation e-mail has been sent to {userDetails.email}. Click the confirmation link in the confirmation e-mail to continue.</p>
      <p className="text-sm text-center font-medium mt-20 mb-6">Didn’t receive the e-mail?</p>
      <button type="button" className={`w-36 text-center block mx-auto text-15 font-semibold leading-none py-3 text-white rounded-md bg-button-color hover:bg-opacity-80`}>
        Resend e-mail
      </button>
    </div>
  );
}
