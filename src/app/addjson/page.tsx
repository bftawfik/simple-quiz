import TextArea from "./_components/textArea/TextArea";

const JSONTextAreaPage = () => {
  return (
    <div className="container flex flex-col h-full justify-center items-center w-[800px]  p-4">
      <h1 className="text-2xl font-bold mb-4">Add JSON Text</h1>
      <TextArea />
    </div>
  );
};
export default JSONTextAreaPage;
