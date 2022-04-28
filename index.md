## MediCap

Medicap is a state-of-art report generation tool for chest X-Ray images. The model uses CheXNet as image feature extractor and Memory-driven Transformer as a caption generator.

### Links
- Frontend - https://github.com/ViduraPrasangana/medicap-fe
- Backend - https://github.com/ViduraPrasangana/BE

### Datasets used for training
- Indiana University X-Ray

### Architecture

![Architecture](https://github.com/ViduraPrasangana/medicap-fe/blob/gh-pages/arch.png)

### Results Comparison with state-of-art

| Model               | BLEU-1 | BLEU-2 | BLEU-3 | BLUE-4 | METEOR | ROUGE-L |
|---------------------|--------|--------|--------|--------|--------|---------|
| HRGR-Agent          | 0.438  | 0.298  | 0.208  | 0.151  | -      | 0.322   |
| CMAS-RL             | 0.464  | 0.301  | 0.210  | 0.154  | -      | 0.362   |
| R2Gen               | 0.470  | 0.304  | 0.219  | 0.165  | 0.187  | 0.371   |
| R2Gen+CheXNet(Ours) | 0.498  | 0.320  | 0.299  | 0.169  | 0.205  | 0.379   |


### Contribution
Supervisor - [Dr. Thanuja Ambegoda](https://github.com/thanujadax)

Project group members 
- [Hemaka Hansika](https://github.com/hemakaraveenhansika)
- [Sachini Abeygunawardhana](https://github.com/SachiniAbeygunawardhana)
- [Vidura Wijerathna](https://github.com/ViduraPrasangana)
