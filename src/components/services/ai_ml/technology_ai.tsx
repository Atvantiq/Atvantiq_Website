import TechStackSection from "../technology";

const aiTechCategories = [
  {
    title: "Languages & Frameworks",
    technologies: [
      { name: "Python", logo: "/services/ai/technology/pythn.jpg" },
      { name: "R", logo: "/services/ai/technology/r.jpg" },
      { name: "TensorFlow", logo: "/services/ai/technology/tensorflow.png" },
      { name: "PyTorch", logo: "/services/ai/technology/pytorch.png" },
      { name: "Keras", logo: "/services/ai/technology/keras.png" }
    ]
  },
  {
    title: "Cloud Platforms",
    technologies: [
      { name: "AWS SageMaker", logo: "/services/ai/technology/aws_sagemaker.jpg" },
      { name: "Azure ML", logo: "/services/ai/technology/azure_ml.png" },
      { name: "Google AI Platform", logo: "/services/ai/technology/google_ai.png" }
    ]
  },
  {
    title: "AI APIs & Tools",
    technologies: [
      { name: "OpenAI GPT", logo: "/services/ai/technology/openai.png" },
      { name: "Hugging Face", logo: "/services/ai/technology/huggingface.png" },
      { name: "OpenCV", logo: "/services/ai/technology/opencv.png" },
      { name: "Dialogflow", logo: "/services/ai/technology/dialogflow.jpg" }
    ]
  },
  {
    title: "ML Libraries",
    technologies: [
      { name: "scikit-learn", logo: "/services/ai/technology/scikit_learn.png" },
      { name: "XGBoost", logo: "/services/ai/technology/xgboost.png" },
      { name: "LightGBM", logo: "/services/ai/technology/lightgbm.png" },
      { name: "spaCy", logo: "/services/ai/technology/spacy.png" }
    ]
  }
];

export const AITechStackSection = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={aiTechCategories}
  />
);