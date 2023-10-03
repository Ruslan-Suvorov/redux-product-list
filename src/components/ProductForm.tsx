interface TodoFormProps { 
  value: string, 
  updateText: (str: string) => void, 
  handleAction: () => void, 
}

export const ProductForm: React.FC<TodoFormProps> = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        placeholder="Новий пункт"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Додати</button>
    </label>
  )
}
