import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  const baiViet = [
    {
      title: "Bài viết 1",
      user: "Cá",
      avatar: "https://avatars.githubusercontent.com/u/117553015?v=",
      role: "Coder",
      content: "Tôi sinh năm 5298. Vào thời đại này, con người gần như đạt tới sự bất tử. Các con robot giờ đây chung sống hòa thuận với mọi người. Vì nhà quá nghèo, không có một con robot nào nên tôi đã nhen nhóm trong mình một hoài bão, ước mơ. Đó chính là trả thành một developer. Tôi mong ước rằng tôi sẽ có thể tạo ra một con robot cho riêng mình.",
    },
    {
      title: "Bài viết 2",
      user: "Quẹ",
      avatar: "https://avatars.githubusercontent.com/u/123743390?v=4",
      role: "Thiểu Năng",
      content: "ádfghjkl4",
    },
    {
      title: "Bài viết 3",
      user: "Kito",
      avatar: "https://avatars.githubusercontent.com/u/95675413?v=4",
      role: "UI/UX",
      content: "wdssssssfgrewdfgtrefgbgt54rghy65t",
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="mx-auto  my-6 font-default text-5xl font-extrabold text-slate-50">
          <TypeAnimation
            sequence={[
              "Hello!",
              1000,
              "Welcome to our website.",
              1000,
              "This website is made by Kry, Pierrot and KitoMC.",
              1000,
            ]}
            wrapper="span"
            speed={35}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="mt-20">
        <div className="text-center">
          <h1 className="mb-3 text-4xl font-extrabold text-slate-50">Blog</h1>
          <p className="text-lg font-normal text-slate-300">Chia sẻ</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {baiViet.map(({ title, user, avatar, content, role }) => (
            <div
              key={user}
              className="flex flex-col gap-y-4 rounded-lg bg-slate-800 p-6 "
            >
              <div className="flex items-center gap-4">
                <img
                  className="size-14 overflow-hidden rounded-full"
                  src={avatar}
                  alt={user}
                />
                <div>
                  <p className="font-bold text-slate-50">{user}</p>
                  <p className="text-slate-300">{role}</p>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-slate-50">{title}</h2>
                <p className="text-slate-300">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
