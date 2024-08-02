import Button from "./Button";
import InviteInput from "./InviteInput";
import ShieldDefaultImg from "./assets/shield_default.png";

import "./index.css";

type Props = {
  onSubmit?: (clan: {
    name: string;
    description: string;
    invite: string;
    image: string;
  }) => void;
};

export default function ClanCreateSection({ onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const clanName = form.get("clanName");
    const description = form.get("description");
    const invite = form.get("invite");
    const image = form.get("image");

    if (!clanName || !description || !invite || !image) {
      return;
    }

    onSubmit?.({
      name: String(clanName),
      description: String(description),
      invite: String(invite),
      image: String(image),
    });
  };

  return (
    <div className="w-full">
      <div className="w-full h-[70px] flex items-center justify-between gap-4 p-4 border border-gray-1 border-x-0 border-solid">
        <p className="text-white font-bold">Create A Clan</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col items-center justify-center p-4 gap-4">
          <img
            src={ShieldDefaultImg}
            alt="shield default"
            className="w-[114px] h-[108px] mt-2"
          />

          <label className="h-[40px] min-w-[114px] flex justify-center items-center cursor-pointer bg-primary text-black font-semibold px-4 py-1 rounded-[10px] transition duration-300 hover:bg-primary/80">
            <input
              name="image"
              type="file"
              accept="image/*"
              className="hidden"
            />
            Change
          </label>

          <div className="w-full px-8 flex flex-col gap-2 mt-4">
            <input
              className="w-full h-[40px] border border-[#FFFFFF33] border-solid rounded-[10px] px-4 py-2 text-left"
              placeholder="Clan name"
              name="clanName"
            />

            <textarea
              className="w-full min-h-[40px] border border-[#FFFFFF33] border-solid rounded-[10px] px-4 py-2 text-left"
              placeholder="Description"
              rows={4}
              name="description"
            />

            <InviteInput
              borderColor="gray-2"
              onInvite={(invite) => console.log(invite)}
              name="invite"
            />

            <Button className="w-full h-[40px]" type="submit">
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
