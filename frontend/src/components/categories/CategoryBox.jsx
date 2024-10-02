const CategoryBox = ({ icon: Icon, label, selected }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 p-2 border-b-2 transition cursor-pointer ${
        selected ? 'border-b-neutral-800' : 'border-transparent'
      } hover:text-neutral-800 hover:border-neutral-800 text-neutral-500`}
    >
      <Icon size={36} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  );
};
export default CategoryBox;
