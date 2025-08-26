export const FooterPoweredBy = () => {
  return (
    <div className="text-center w-full border-t border-gray-700 pt-4 mt-8 bg-gray-900">
      <p className="text-sm text-white">Powered by</p>
      <a 
        href="https://comerciandola.cl" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block mt-2"
      >
        <img 
          src="https://i.ibb.co/m6WGxkG/image.png" 
          alt="Comerciandola Logo" 
          className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </a>
    </div>
  );
};
