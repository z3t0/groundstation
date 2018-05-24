from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLabel, QHBoxLayout


def create_element(opts):
    l = QHBoxLayout()

    name_w = QLabel(opts['name'])

    if opts['type'] == "text":
        value_w = QLabel(opts['value'])

    l.addWidget(name_w)
    l.addWidget(value_w)

    print(opts)

    return l
    

def create_section(name):
    w = QVBoxLayout()
    w.addWidget(QLabel(name))

    return w


class PropertiesWidget(QWidget):
    def __init__(self):
        super().__init__()

    def generate_ui(self, properties):
        # A dictionary with the following scheme:
        # { section_name : [ name: { value, type } ] }

        layout = QVBoxLayout()

        for section in properties:

            lay = create_section(section)
            layout.addLayout(lay)

            for element in properties[section]:
                lay.addLayout(create_element(element))

        self.setLayout(layout)


