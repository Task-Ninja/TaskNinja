import unittest
from unittest.mock import patch
from aigigmatch import gradio_interface

class TestGradioInterface(unittest.TestCase):
    @patch("gradio.Interface")
    def test_gradio_interface(self, mock_interface):
        # Mock the necessary objects and methods
        mock_interface.return_value.__enter__.return_value = mock_interface
        mock_interface.__getitem__.return_value = None
        mock_interface.__exit__.return_value = None

        # Call the function
        gradio_interface()

        # Assert that the necessary objects and methods were called
        mock_interface.assert_called_once()
        mock_interface.return_value.__enter__.assert_called_once()
        mock_interface.return_value.__getitem__.assert_called_once_with("AI Interaction")
        mock_interface.return_value.__exit__.assert_called_once()

if __name__ == "__main__":
    unittest.main()