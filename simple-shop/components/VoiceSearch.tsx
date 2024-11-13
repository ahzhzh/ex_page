'use client';

import { useState } from 'react';
import styles from './VoiceSearch.module.css';

interface VoiceSearchProps {
  onProductFound: (product: any) => void;
  onAddToCart: (product: any) => void;  //추가된 prop
}

const VoiceSearch = ({ onProductFound, onAddToCart }: VoiceSearchProps) => {
  const [isListening, setIsListening] = useState(false);
  const [responseText, setResponseText] = useState('');

  const startListening = async () => {
    setIsListening(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks);
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        
        reader.onloadend = async () => {
          const base64Audio = reader.result?.toString().split(',')[1];
          
          try {
            // STT API 호출
            const response = await fetch('http://localhost:3001/api/speech-to-text', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ audioData: base64Audio }),
            });

            const data = await response.json();
            console.log('Server response:', data);  // 서버 응답 로깅
            // enhancedResponse가 있으면 그것을 우선 사용, 없으면 responseText 사용
            setResponseText(data.enhancedResponse || data.responseText);

            if (data.action === 'ADD_TO_CART' && data.product) {
              
              onAddToCart(data.product);
            } else if (data.action === 'SHOW_PRICE' && data.product) {
              onProductFound(data.product);
            }

            if(data.audioContent){
              const audioBlob = new Blob(
                [Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0))],
                { type : 'audio/mp3'}
              );
              const audioUrl = URL.createObjectURL(audioBlob);
              const audio = new Audio(audioUrl);
              audio.play();
            }
          } catch (error) {
            console.error('Error processing voice command:', error);
            setResponseText('음성 처리 중 오류가 발생했습니다.');
          }
        };
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
        setIsListening(false);
      }, 5000); // 5초 동안 녹음

    } catch (error) {
      console.error('Error accessing microphone:', error);
      setIsListening(false);
    }
  };

  return (
    <div className={styles.voiceSearch}>
      <button 
        onClick={startListening}
        disabled={isListening}
        className={styles.voiceButton}
      >
        {isListening ? '듣는 중...' : '🎤'}
      </button>
      {responseText && <p className={styles.response}>{responseText}</p>}
    </div>
  );
};

export default VoiceSearch;