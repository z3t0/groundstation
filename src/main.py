from app import App

from PyQt5.QtWidgets import QApplication, QWidget, QGridLayout

import sys

from properties_widget import PropertiesWidget


if __name__ == "__main__":
    app = QApplication(sys.argv)

    gs = App()

    properties = PropertiesWidget()

    data = {
        'Movement':
        [
            {
                'name': 'velocity',
                'value': '22',
                'type': 'text'
            }
        ]
    }

    properties.generate_ui(data)

    gs.add(properties)

    # Changed the speed
    data = {
        'Movement':
        [
            {
                'name': 'velocity',
                'value': '10',
                'type': 'text'
            },
        ]
    }
    properties.generate_ui(data)

    sys.exit(app.exec_())
