import { Attribute } from "../types";


export const AttributeSelector: React.FC<{
  attributes: Attribute[];
  selectedAttributes: { [key: string]: string };
  onAttributeChange: (name: string, value: string) => void;
}> = ({ attributes, selectedAttributes, onAttributeChange }) => (
  <div className="mt-6">
    <h3 className="font-bold text-white mb-4">Attributes:</h3>
    {attributes.map((attribute) => (
      <div key={attribute.name} className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {attribute.name}:
        </label>
        <div className="flex flex-wrap gap-2">
          {attribute.values.map((value) => (
            <button
              key={value}
              onClick={() => onAttributeChange(attribute.name, value)}
              className={`px-3 py-2 rounded border text-sm font-medium transition-colors ${
                selectedAttributes[attribute.name] === value
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);
