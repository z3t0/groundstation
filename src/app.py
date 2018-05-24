from PyQt5.QtWidgets import QApplication, QWidget, QGridLayout
from PyQt5.QtWidgets import QHBoxLayout, QVBoxLayout, QPushButton
import sys


class App (QWidget):
    def __init__(self):
        super().__init__()

        self.init_ui()

    def init_ui(self):
        
        self.layout = QGridLayout()
        
        self.setLayout(self.layout)    
        
        self.setGeometry(300, 300, 300, 150)
        self.setWindowTitle('Buttons')    
        self.show()

    def add(self, w):
        self.layout.addWidget(w)
