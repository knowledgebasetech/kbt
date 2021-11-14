import { copyRightText } from "../kbt.config";
export default function Footer() {
  return (
    <footer className="bg-white flex-shrink-0 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-8 text-center text-base text-gray-400">
          {copyRightText}
        </p>
      </div>
    </footer>
  );
}
