import React, { useState } from 'react';
import './Slider.css';

interface SliderProps {
  /**
   * An array of numbers representing the marks on the slider.
   * Each number should be between 0 and 100.
   */
  marks: number[];

  /**
   * The size of the slider, which determines its height.
   * Available options are 'small', 'medium', and 'large'.
   */
  size: 'small' | 'medium' | 'large';

  /**
   * Callback function that is called whenever the slider value changes.
   * It receives the new value as a parameter.
   */
  onChange: (value: number) => void;
}

const Slider = ({ marks, size, onChange }: SliderProps) => {
  const [value, setValue] = useState(marks[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 确保滑动只能在刻度上
    const newValue = closestMark(Number(e.target.value), marks);
    setValue(newValue);
    onChange(newValue);
  };

  // 寻找最接近的刻度
  const closestMark = (val: number, marks: number[]) => {
    return marks.reduce((prev, curr) => {
      return Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev;
    });
  };

  return (
    <div className={`slider ${size}`}>
      <input
        type="range"
        min={Math.min(...marks)}
        max={Math.max(...marks)}
        value={value}
        step={1}
        onChange={handleChange}
        className="slider-range"
      />
      <div className="slider-marks">
        {marks.map(mark => (
          <span key={mark} style={{ left: `${mark}%` }} className="mark"></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
