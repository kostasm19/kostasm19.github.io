<?php

/**
 *
 */
class Images
{
	private $image = '';
	private $folderName = '';
	private $mode;	//mode-1: show only one folder, mode-0: show images from all folders

	function __construct($folderName) {
		if (!empty($folderName)) {

			if (file_exists('./images/' . $folderName) && is_dir('./images/' . $folderName)) {
				$this->folderName = $folderName;
				$this->mode = 1;
			}
			else {
				$this->folderName = '';
				$this->mode = 0;
			}
		}
		else {
			$this->folderName = '';
			$this->mode = 0;
		}
	}

	private function getFolder() {
		if ($this->mode == 1) {
			return './images/' . $this->folderName . '/';
		}
		else {
			return './images/';
		}
	}
	private function getPath($entry) {
		return $this->getFolder() . '' . $entry;
	}

	public function getImages() {
		if ($this->mode == 1) {
			$this->getImagesOneFolder();
		}
		else {
			$this->getImagesAllFolders();
		}
	}

	private function getImagesOneFolder() {
		$filesNumber = $this->howManyFiles();
		$first = true;
		echo '<ol class="carousel-indicators">';
		for ($i = 0; $i < $filesNumber; $i++) {
			echo '<li data-target="#myCarousel" data-slide-to="'.$i.'"';
			if ($first) { echo ' class="active"'; $first = false; }
			echo '"></li>';
		}
		echo '</ol>';

		$first = true;
		if ($handle = opendir($this->getFolder())) {
		    while (false !== ($imageEntry = readdir($handle))) {
				if (getimagesize($this->getFolder().'/'.$imageEntry)) {
					echo '<div class="item';
					if ($first) { echo ' active'; $first = false; }
					echo '">
						<img src="' . $this->getFolder().'/'.$imageEntry . '" >
					</div>';
				}
		    }
		    closedir($handle);
		}
	}
	private function howManyFiles() {
		$it = 0;
		if ($handle = opendir($this->getFolder())) {
		    while (false !== ($imageEntry = readdir($handle))) {
				if (getimagesize($this->getFolder().'/'.$imageEntry)) {
					$it++;
				}
		    }
		    closedir($handle);
		}
		return $it;
	}
	private function getImagesAllFolders() {
		$first = true;
		if ($outer = opendir($this->getFolder())) {
		    while (false !== ($entry = readdir($outer))) {
				if (is_dir($this->getPath($entry)) && $entry != '.' && $entry != '..') {
					if ($inner = opendir($this->getPath($entry))) {
						while(false !== ($imageEntry = readdir($inner))) {
							if (getimagesize($this->getPath($entry).'/'.$imageEntry)) {
								echo '<div class="item';
								if ($first) { echo ' active'; $first = false; }
								echo '">
									<img src="' . $this->getPath($entry).'/'.$imageEntry . '"  width="460" height="345" >
								</div>';
							}
						}
						closedir($inner);
					}
				}
		    }
		    closedir($outer);
		}
	}
}



 ?>
